import { useRef } from "react";

function customUseEffect(effect, deps) {
    const firstTimeRender = useRef(true);
    const prevDeps = useRef([])
    const cleanup = useRef(null)
    // first time
    if(firstTimeRender.current) {
        cleanup.current = effect()
        firstTimeRender.current = false;
        return;
    }

    // deps or no deps
    const depsChanged = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true;

    if(depsChanged) {
        if(cleanup.current) {
            cleanup.current()
        }
        cleanup.current = effect() || null;
    }


    // clean up  funcs

    prevDeps.current = (deps || [])
}

export default customUseEffect;