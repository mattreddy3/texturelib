import {FETCH_TEXTURES, TEXTURES_LOADING, TEXTURES_LOADED, TEXTURES_LOADING_FAILED} from './constants';
// ACTION CREATORS

export function fetchTextures(){
    return {type:FETCH_TEXTURES}
}

export function texturesLoading(loading){
    return {
        type: TEXTURES_LOADING,
        payload: loading
    }
}

export function texturesLoaded(textures){
    return{
        type: TEXTURES_LOADED,
        payload: textures
    }
}

export function texturesLoadingFailed(message){
    return{
        type:TEXTURES_LOADING_FAILED,
        payload:message
    }
}