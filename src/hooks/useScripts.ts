import { isServer } from '@/utils/common';
import { useState, useEffect } from 'react';

// Cache
let cachedScripts: string[] = [];

interface ScriptType {
  url: string;
  type: 'style' | 'script';
  integrity?: string;
}

export function useScripts(scripts: ScriptType[]) {
  const [state, setState] = useState<any[]>([]);

  useEffect(
    () => {
      if(isServer()) return;
      scripts.forEach((item) => {
        if (cachedScripts.includes(item.url)) {
          setState(p => [...p, {
            key: item.url,
            loaded: true,
          }]);
        } else {
          cachedScripts.push(item.url);
          const scriptElem = createScriptTag(item);
          // load event listener callback
          const onScriptLoad = () => setState(p => [
            ...p, { loaded: true, error: false, }
          ]);

          // error event listener callback
          const onScriptError = () => {
            // Remove from cache
            const index = cachedScripts.indexOf(item.url);
            if (index >= 0) cachedScripts.splice(index, 1);
            scriptElem.remove();
            setState(p => [...p, { key: item.url, loaded: false }]);
          };
  
          scriptElem.addEventListener('load', onScriptLoad);
          scriptElem.addEventListener('error', onScriptError);
          document.body.appendChild(scriptElem);
          return () => {
            // event listeners on cleanup
            scriptElem.removeEventListener('load', onScriptLoad);
            scriptElem.removeEventListener('error', onScriptError);
          };
        }
      })
    },
    [scripts.length]
  );

  const errors = state.filter(s => !s.loaded);
  return {
    errors: errors,
    loaded: errors.length === 0,
  };
}

function createScriptTag({ type, url, integrity }: ScriptType) {
  switch (type) {
    case 'style': {
      const linkType = document.createElement('link');
      if (integrity) linkType.integrity = integrity;
      linkType.href = url;
      linkType.rel = 'stylesheet';
      linkType.crossOrigin = '';
      return linkType;
    }
    case 'script': {
      const scriptType = document.createElement('script');
      if (integrity) scriptType.integrity = integrity;
      scriptType.src = url;
      scriptType.crossOrigin = '';
      return scriptType;
    }
  }
}