import React, { FC, ReactNode, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { CenteredLayout } from './components/CenteredLayout';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header/Header';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';
import { selectIsAuth } from './redux/slices/auth';
import { fetchAuthMe } from './redux/slices/actionsCreators';
import { ErrorMessageContainer } from './components/Input';

const Global = createGlobalStyle`
* {
    color: #000000;
    box-sizing: border-box;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}
`
//Закрытие доступа для неавторизованного пользователя
const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const isAuth = useAppSelector(selectIsAuth)
  return (
    <>
      {isAuth
        ? children
        : <ErrorMessageContainer>
          Нет доступа
        </ErrorMessageContainer>
      }
    </>
  )
}

function App() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isAuth = useAppSelector(selectIsAuth)

  //Проверка авторизации пользователя
  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

//Получение объектов 
  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])
  return (
    <>
      <Global />
      <CenteredLayout>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </CenteredLayout>
    </>
  );
}

export default App;
