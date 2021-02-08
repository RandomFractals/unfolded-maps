// URL: https://observablehq.com/@randomfractals/unfolded-map-react
// Title: Unfolded Map React
// Author: Taras Novak (@randomfractals)
// Version: 107
// Runtime version: 1

const m0 = {
  id: "7f5d0a207d20e686@107",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Unfolded Map React

Simple example of creating [Unfolded Map with React](https://docs.unfolded.ai/map-sdk/examples/use-with-react)`
)})
    },
    {
      name: "viewof mapApp",
      inputs: ["render","useState","jsx","App"],
      value: (function(render,useState,jsx,App){return(
render(({ useSetter }) => {
  const [value, setValue] = useState("");
  useSetter(value);
  return jsx`<${App} />`;
})
)})
    },
    {
      name: "mapApp",
      inputs: ["Generators","viewof mapApp"],
      value: (G, _) => G.input(_)
    },
    {
      name: "App",
      inputs: ["React","jsx","UnfoldedMap"],
      value: (function(React,jsx,UnfoldedMap){return(
function App() {
  const [isMapLoaded, setIsMapLoaded] = React.useState(false);
  const [map, setMap] = React.useState(null);
  return (jsx`
    <div className="App">
      <${UnfoldedMap} setMap={setMap} setIsMapLoaded={setIsMapLoaded} />
    </div>
  `);
}
)})
    },
    {
      name: "UnfoldedMap",
      inputs: ["React","mapSDK","width","jsx"],
      value: (function(React,mapSDK,width,jsx){return(
function UnfoldedMap({setMap, setIsMapLoaded}) {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    const map = mapSDK.createMap({
      mapUrl: 'https://studio.unfolded.ai/public/80c800cc-5805-4416-94a5-bd8105cab7f7',
      appendToDocument: false,
      embed: true,
      width: width,
      height: 600,
      onLoad: () => {
        setMap(map);
        setIsMapLoaded(true);
      }
    });
    mapRef.current.appendChild(map.iframe);
  }, [setMap, setIsMapLoaded]);
  return (jsx`
    <div className="unfolded">
      <div ref=${mapRef} />
    </div>
  `);
}
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### Unfolded Map SDK and React Imports`
)})
    },
    {
      name: "mapSDK",
      value: (function(){return(
import('https://unpkg.com/@unfolded/map-sdk@0.1.1/dist/index.js?module')
)})
    },
    {
      from: "@j-f1/react-16",
      name: "render",
      remote: "render"
    },
    {
      from: "@j-f1/react-16",
      name: "component",
      remote: "component"
    },
    {
      from: "@j-f1/react-16",
      name: "jsx",
      remote: "jsx"
    },
    {
      from: "@j-f1/react-16",
      name: "memo",
      remote: "memo"
    },
    {
      from: "@j-f1/react-16",
      name: "forwardRef",
      remote: "forwardRef"
    },
    {
      from: "@j-f1/react-16",
      name: "React",
      remote: "React"
    },
    {
      from: "@j-f1/react-16",
      name: "ReactDOM",
      remote: "ReactDOM"
    },
    {
      from: "@j-f1/react-16",
      name: "createElement",
      remote: "createElement"
    },
    {
      from: "@j-f1/react-16",
      name: "Children",
      remote: "Children"
    },
    {
      from: "@j-f1/react-16",
      name: "createRef",
      remote: "createRef"
    },
    {
      from: "@j-f1/react-16",
      name: "createContext",
      remote: "createContext"
    },
    {
      from: "@j-f1/react-16",
      name: "lazy",
      remote: "lazy"
    },
    {
      from: "@j-f1/react-16",
      name: "Fragment",
      remote: "Fragment"
    },
    {
      from: "@j-f1/react-16",
      name: "StrictMode",
      remote: "StrictMode"
    },
    {
      from: "@j-f1/react-16",
      name: "Suspense",
      remote: "Suspense"
    },
    {
      from: "@j-f1/react-16",
      name: "cloneElement",
      remote: "cloneElement"
    },
    {
      from: "@j-f1/react-16",
      name: "useCallback",
      remote: "useCallback"
    },
    {
      from: "@j-f1/react-16",
      name: "useContext",
      remote: "useContext"
    },
    {
      from: "@j-f1/react-16",
      name: "useEffect",
      remote: "useEffect"
    },
    {
      from: "@j-f1/react-16",
      name: "useImperativeHandle",
      remote: "useImperativeHandle"
    },
    {
      from: "@j-f1/react-16",
      name: "useLayoutEffect",
      remote: "useLayoutEffect"
    },
    {
      from: "@j-f1/react-16",
      name: "useMemo",
      remote: "useMemo"
    },
    {
      from: "@j-f1/react-16",
      name: "useReducer",
      remote: "useReducer"
    },
    {
      from: "@j-f1/react-16",
      name: "useRef",
      remote: "useRef"
    },
    {
      from: "@j-f1/react-16",
      name: "useState",
      remote: "useState"
    },
    {
      from: "@j-f1/react-16",
      name: "useDebugValue",
      remote: "useDebugValue"
    },
    {
      from: "@j-f1/react-16",
      name: "createPortal",
      remote: "createPortal"
    },
    {
      from: "@j-f1/react-16",
      name: "__SECRET_SWITCHER",
      remote: "__SECRET_SWITCHER"
    }
  ]
};

const m1 = {
  id: "@j-f1/react-16",
  variables: [
    {
      from: "@j-f1/react-16/7",
      name: "render",
      remote: "render"
    },
    {
      from: "@j-f1/react-16/7",
      name: "component",
      remote: "component"
    },
    {
      from: "@j-f1/react-16/7",
      name: "jsx",
      remote: "jsx"
    },
    {
      from: "@j-f1/react-16/7",
      name: "memo",
      remote: "memo"
    },
    {
      from: "@j-f1/react-16/7",
      name: "forwardRef",
      remote: "forwardRef"
    },
    {
      from: "@j-f1/react-16/7",
      name: "React",
      remote: "React"
    },
    {
      from: "@j-f1/react-16/7",
      name: "ReactDOM",
      remote: "ReactDOM"
    },
    {
      from: "@j-f1/react-16/7",
      name: "createElement",
      remote: "createElement"
    },
    {
      from: "@j-f1/react-16/7",
      name: "Children",
      remote: "Children"
    },
    {
      from: "@j-f1/react-16/7",
      name: "createRef",
      remote: "createRef"
    },
    {
      from: "@j-f1/react-16/7",
      name: "createContext",
      remote: "createContext"
    },
    {
      from: "@j-f1/react-16/7",
      name: "lazy",
      remote: "lazy"
    },
    {
      from: "@j-f1/react-16/7",
      name: "Fragment",
      remote: "Fragment"
    },
    {
      from: "@j-f1/react-16/7",
      name: "StrictMode",
      remote: "StrictMode"
    },
    {
      from: "@j-f1/react-16/7",
      name: "Suspense",
      remote: "Suspense"
    },
    {
      from: "@j-f1/react-16/7",
      name: "cloneElement",
      remote: "cloneElement"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useCallback",
      remote: "useCallback"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useContext",
      remote: "useContext"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useEffect",
      remote: "useEffect"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useImperativeHandle",
      remote: "useImperativeHandle"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useLayoutEffect",
      remote: "useLayoutEffect"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useMemo",
      remote: "useMemo"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useReducer",
      remote: "useReducer"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useRef",
      remote: "useRef"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useState",
      remote: "useState"
    },
    {
      from: "@j-f1/react-16/7",
      name: "useDebugValue",
      remote: "useDebugValue"
    },
    {
      from: "@j-f1/react-16/7",
      name: "createPortal",
      remote: "createPortal"
    },
    {
      from: "@j-f1/react-16/7",
      name: "__SECRET_SWITCHER",
      remote: "__SECRET_SWITCHER"
    },
    {
      name: "versionRange",
      value: (function(){return(
"16"
)})
    },
    {
      name: "dev",
      value: (function(){return(
true
)})
    },
    {
      from: "@j-f1/react-16",
      name: "versionRange",
      remote: "versionRange"
    },
    {
      from: "@j-f1/react-16",
      name: "dev",
      remote: "dev"
    }
  ]
};

const m2 = {
  id: "@j-f1/react-16/7",
  variables: [
    {
      name: "render",
      inputs: ["__SECRET_INTERNALS","__SECRET_CREATE_ID","DOM","useEffect","ReactDOM","createElement"],
      value: (function(__SECRET_INTERNALS,__SECRET_CREATE_ID,DOM,useEffect,ReactDOM,createElement){return(
(render, keyOrElement) =>
  __SECRET_INTERNALS('elements', String(render), keyOrElement, {
    init: state => ({
      renderer: () => state.render(state.public),
      id: __SECRET_CREATE_ID(),
      element: DOM.element('div'),
      public: {
        useSetter: (setterOrValue, deps) =>
          typeof setterOrValue === 'function'
            ? useEffect(
                () =>
                  state.public.setValue(setterOrValue(state.public.getValue())),
                deps
              )
            : useEffect(() => state.public.setValue(setterOrValue), [
                setterOrValue
              ]),
        getValue: () => state.element.value,
        setValue: value => {
          state.element.value = value;
          state.element.dispatchEvent(new CustomEvent('input'));
        }
      }
    }),
    update: { render },
    effect: state =>
      ReactDOM.render(createElement(state.renderer), state.element),
    return: state => state.element
  })
)})
    },
    {
      name: "component",
      inputs: ["__SECRET_INTERNALS","__SECRET_SET_DISPLAYNAME"],
      value: (function(__SECRET_INTERNALS,__SECRET_SET_DISPLAYNAME){return(
(render, name, keyOrPrevious) =>
  __SECRET_INTERNALS('components', String(render), keyOrPrevious, {
    init: (state, funcFor) => ({
      component: __SECRET_SET_DISPLAYNAME(funcFor('render'), name)
    }),
    update: { render },
    return: state => state.component
  })
)})
    },
    {
      name: "jsx",
      inputs: ["htm","createElement"],
      value: (function(htm,createElement)
{
  const jsx = htm.bind(createElement);
  return (...args) => {
    try {
      return jsx(...args);
    } catch (e) {
      // throw a clearer error
      let stack = e.stack;
      if (!stack.includes(e.message)) {
        stack = `${e.constructor.name}: ${e.message}\n${stack}`;
      }
      throw new SyntaxError('JSX syntax error\n' + stack);
    }
  };
}
)
    },
    {
      name: "memo",
      inputs: ["__SECRET_INTERNALS","React","__SECRET_SET_DISPLAYNAME"],
      value: (function(__SECRET_INTERNALS,React,__SECRET_SET_DISPLAYNAME){return(
(render, arePropsEqual, name, keyOrElement) =>
  __SECRET_INTERNALS(
    'memos',
    JSON.stringify([String(render), String(arePropsEqual)]),
    keyOrElement,
    {
      init: (state, funcFor) => ({
        component: React.memo(
          __SECRET_SET_DISPLAYNAME(funcFor('render'), name),
          funcFor('arePropsEqual')
        )
      }),
      update: { render, arePropsEqual },
      return: state => state.component
    }
  )
)})
    },
    {
      name: "forwardRef",
      inputs: ["__SECRET_INTERNALS","React","__SECRET_SET_DISPLAYNAME"],
      value: (function(__SECRET_INTERNALS,React,__SECRET_SET_DISPLAYNAME){return(
(render, name, keyOrElement) =>
  __SECRET_INTERNALS('forwardRefs', String(render), keyOrElement, {
    init: (state, funcFor) => ({
      component: React.forwardRef(
        __SECRET_SET_DISPLAYNAME(funcFor('render'), name)
      )
    }),
    update: { render },
    return: state => state.component
  })
)})
    },
    {
      name: "React",
      inputs: ["__SECRET_REQUIRE"],
      value: (function(__SECRET_REQUIRE){return(
__SECRET_REQUIRE('react')
)})
    },
    {
      name: "ReactDOM",
      inputs: ["__SECRET_REQUIRE"],
      value: (function(__SECRET_REQUIRE){return(
__SECRET_REQUIRE('react-dom')
)})
    },
    {
      inputs: ["viewof createElement"]
    },
    {
      inputs: ["viewof Children"]
    },
    {
      inputs: ["viewof createRef"]
    },
    {
      inputs: ["viewof createContext"]
    },
    {
      inputs: ["viewof lazy"]
    },
    {
      inputs: ["viewof Fragment"]
    },
    {
      inputs: ["viewof StrictMode"]
    },
    {
      inputs: ["viewof Suspense"]
    },
    {
      inputs: ["viewof cloneElement"]
    },
    {
      inputs: ["viewof useCallback"]
    },
    {
      inputs: ["viewof useContext"]
    },
    {
      inputs: ["viewof useEffect"]
    },
    {
      inputs: ["viewof useImperativeHandle"]
    },
    {
      inputs: ["viewof useLayoutEffect"]
    },
    {
      inputs: ["viewof useMemo"]
    },
    {
      inputs: ["viewof useReducer"]
    },
    {
      inputs: ["viewof useRef"]
    },
    {
      inputs: ["viewof useState"]
    },
    {
      inputs: ["viewof useDebugValue"]
    },
    {
      inputs: ["viewof createPortal"]
    },
    {
      name: "__SECRET_SWITCHER",
      inputs: ["html","DOM","md"],
      value: (function(html,DOM,md){return(
current => {
  const link = (name, owner = 'j-f1') => {
    const slug = `@${owner}/${name}`;
    return slug === current
      ? html`<code><strong>${DOM.text(slug)}</strong></code> (this notebook)`
      : html`<a href="https://observablehq.com/${slug}"><code>${DOM.text(
          slug
        )}`;
  };
  return md`
${
  current === '@j-f1/react'
    ? ''
    : `
You can use it in exactly the same ways as the original notebook, and you should be able to simply swap

~~~js
import { ... } from '@j-f1/react'
~~~

with

~~~js
import { ... } from '${current}'
~~~
`
}
Other notebooks in this series:
- ${link('react')}, which always uses the latest stable version of React
- ${link('react-16')}, which always uses the latest stable version of
  React 16.x. (You can also do this by [manually specifying the React version](#versionRangeDoc))
- ${link('react-experimental')}, which always uses the latest **experimental**
  version of React.
  `;
}
)})
    },
    {
      name: "__SECRET_INTERNALS",
      inputs: ["__SECRET_STATE"],
      value: (function(__SECRET_STATE){return(
function cache(
  type,
  key,
  ctx,
  { init, update, effect, return: returnValue }
) {
  const fullKey = typeof ctx === 'string' ? key + '\n' + ctx : key;
  const prevResult =
    typeof ctx === 'object' || typeof ctx === 'function' ? ctx : null;

  const updateAndReturn = state => {
    Object.assign(state, update);
    if (effect) effect(state);
    const ret = returnValue(state);
    try {
      ret[__SECRET_STATE] = state;
    } catch {}
    return ret;
  };

  if (prevResult) {
    return updateAndReturn(prevResult[__SECRET_STATE]);
  }

  if (!cache[type]) cache[type] = Object.create(null);
  if (!cache[type][fullKey]) {
    const state = Object.create(null);
    Object.assign(
      state,
      init(state, subkey => (...args) => state[subkey](...args))
    );
    cache[type][fullKey] = state;
  }
  return updateAndReturn(cache[type][fullKey]);
}
)})
    },
    {
      name: "__SECRET_CREATE_ID",
      value: (function(){return(
() =>
  Number(
    Math.random()
      .toString()
      .slice(2)
  ).toString(36)
)})
    },
    {
      name: "__SECRET_SET_DISPLAYNAME",
      value: (function(){return(
(f, name) => {
  f.displayName = name;
  return f;
}
)})
    },
    {
      name: "htm",
      inputs: ["require"],
      value: (function(require){return(
require('htm@2.2.1/dist/htm.umd.js')
)})
    },
    {
      name: "__SECRET_REQUIRE",
      inputs: ["require","versionRange","dev"],
      value: (function(require,versionRange,dev){return(
require.alias({
  react: `https://unpkg.com/react@${versionRange.react ||
    versionRange}/umd/react.${dev ? 'development' : 'production.min'}.js`,
  'react-dom': `https://unpkg.com/react-dom@${versionRange.dom ||
    versionRange}/umd/react-dom.${dev ? 'development' : 'production.min'}.js`
})
)})
    },
    {
      name: "viewof createElement",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.react('createElement', 'createlement')
)})
    },
    {
      name: "createElement",
      inputs: ["Generators","viewof createElement"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof Children",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.react('Children')
)})
    },
    {
      name: "Children",
      inputs: ["Generators","viewof Children"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof createRef",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.react('createRef')
)})
    },
    {
      name: "createRef",
      inputs: ["Generators","viewof createRef"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof createContext",
      inputs: ["__SECRET_DOC","React"],
      value: (function(__SECRET_DOC,React){return(
__SECRET_DOC(
  'https://reactjs.org/docs/context.html#reactcreatecontext',
  'createContext',
  React.createContext
)
)})
    },
    {
      name: "createContext",
      inputs: ["Generators","viewof createContext"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof lazy",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.react('lazy')
)})
    },
    {
      name: "lazy",
      inputs: ["Generators","viewof lazy"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof Fragment",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.react('Fragment')
)})
    },
    {
      name: "Fragment",
      inputs: ["Generators","viewof Fragment"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof StrictMode",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.react('StrictMode')
)})
    },
    {
      name: "StrictMode",
      inputs: ["Generators","viewof StrictMode"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof Suspense",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.react('Suspense')
)})
    },
    {
      name: "Suspense",
      inputs: ["Generators","viewof Suspense"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof cloneElement",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.react('cloneElement', 'cloneelement')
)})
    },
    {
      name: "cloneElement",
      inputs: ["Generators","viewof cloneElement"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useCallback",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useCallback')
)})
    },
    {
      name: "useCallback",
      inputs: ["Generators","viewof useCallback"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useContext",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useContext')
)})
    },
    {
      name: "useContext",
      inputs: ["Generators","viewof useContext"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useEffect",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useEffect')
)})
    },
    {
      name: "useEffect",
      inputs: ["Generators","viewof useEffect"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useImperativeHandle",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useImperativeHandle')
)})
    },
    {
      name: "useImperativeHandle",
      inputs: ["Generators","viewof useImperativeHandle"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useLayoutEffect",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useLayoutEffect')
)})
    },
    {
      name: "useLayoutEffect",
      inputs: ["Generators","viewof useLayoutEffect"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useMemo",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useMemo')
)})
    },
    {
      name: "useMemo",
      inputs: ["Generators","viewof useMemo"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useReducer",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useReducer')
)})
    },
    {
      name: "useReducer",
      inputs: ["Generators","viewof useReducer"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useRef",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useRef')
)})
    },
    {
      name: "useRef",
      inputs: ["Generators","viewof useRef"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useState",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useState')
)})
    },
    {
      name: "useState",
      inputs: ["Generators","viewof useState"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof useDebugValue",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.hook('useDebugValue')
)})
    },
    {
      name: "useDebugValue",
      inputs: ["Generators","viewof useDebugValue"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof createPortal",
      inputs: ["__SECRET_DOC"],
      value: (function(__SECRET_DOC){return(
__SECRET_DOC.dom('createPortal')
)})
    },
    {
      name: "createPortal",
      inputs: ["Generators","viewof createPortal"],
      value: (G, _) => G.input(_)
    },
    {
      name: "__SECRET_STATE",
      value: (function(){return(
Symbol('rendered state')
)})
    },
    {
      name: "__SECRET_DOC",
      inputs: ["require","DOM","MutationObserver","React","ReactDOM"],
      value: (async function(require,DOM,MutationObserver,React,ReactDOM)
{
  const { Inspector } = await require('@observablehq/inspector');
  const doc = (url, name, value) => {
    const node = DOM.element('span');
    const inspector = new Inspector(node);
    inspector.fulfilled(value, name);
    const nameEl = node.querySelector('.observablehq--cellname');
    const clobberName = () =>
      (nameEl.innerHTML = `<a href="${url}">${name}</a> = `);
    clobberName();
    new MutationObserver(clobberName).observe(nameEl.parentNode, {
      childList: true,
      attributes: true
    });
    node.value = value;
    return node;
  };
  return Object.assign(doc, {
    react: (name, id = 'react' + name.toLowerCase()) =>
      doc('https://reactjs.org/docs/react-api.html#' + id, name, React[name]),
    hook: name =>
      doc(
        'https://reactjs.org/docs/hooks-reference.html#' + name.toLowerCase(),
        name,
        React[name]
      ),
    dom: (name, id = name.toLowerCase()) =>
      doc('https://reactjs.org/docs/react-dom.html#' + id, name, ReactDOM[name])
  });
}
)
    }
  ]
};

const notebook = {
  id: "7f5d0a207d20e686@107",
  modules: [m0,m1,m2]
};

export default notebook;
