import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { RootDispatch, RootState } from '../store'

export const useAppDispatch: () => RootDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector