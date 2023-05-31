import React, { FC, useEffect, useState } from 'react'
import { Table } from '../components/Table'
import { Button } from '../components/Buttons/Button'
import { ModalConteiner } from '../components/ModalContainer'
import { Flex } from '../styles/Flex.styled'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import { Fields, fetchAddNote } from '../redux/slices/notes'
import { CircularProgress, Pagination } from '@mui/material'
import { Input } from '../components/Input'
import { fetchNotes } from '../redux/slices/actionsCreators'
import { Div } from '../styles/Div.styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home: FC = () => {
  const dispatch = useAppDispatch()

  //Текущая страница
  const [currentPage, setCurrentPage] = useState<number>(1)

  //Получение заметок
  useEffect(() => {
    dispatch(fetchNotes(currentPage))
  }, [currentPage])

  //Состояние модального окна добавления заметки
  const [modalAddActive, setmodalAddActive] = useState<boolean>(false)

  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')

  //Состояние загрузки заметок 
  const isLoading = useAppSelector(state => state.notes.isLoading)

  //Оповещение о добавлении объекта
  const addNoteNotify = () => toast('Данные сохранены')

  const onClickAddButton = () => {
    try {
      const fields: Fields = {
        title,
        text
      }
      dispatch(fetchAddNote(fields))
      setTitle('')
      setText('')
      addNoteNotify()
      setmodalAddActive(false)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Flex
        direction={'column'}
        backgroundColor={'#fff'}
        boxShadow={'0 4px 20px #00000014'}
        width={'300px'}
        padding={'20px'}
        br={'10px'}
        mb={'30px'}
      >
        <Flex
          justify={'space-between'}
        >
          <p>Добавьте новую<br /> заметку</p>
          <Flex
            justify={'center'}
            align={'center'}
            backgroundColor={'rgb(0 0 0 / 8%)'}
            br={'50%'}
            width={'40px'}
            height={'40px'}
          >
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1136 1.76261C18.5449 1.19486 17.7743 0.875977 16.9708 0.875977C16.1672 0.875977 15.3966 1.19486 14.8279 1.76261L1.22506 15.3658C0.835522 15.7531 0.526656 16.2139 0.316337 16.7214C0.106017 17.2289 -0.00158066 17.7731 -0.000231611 18.3224V20.0396C-0.000231611 20.2614 0.0878868 20.4741 0.244738 20.631C0.40159 20.7878 0.614327 20.876 0.836148 20.876H2.55324C3.10254 20.8775 3.64669 20.7701 4.1542 20.5599C4.6617 20.3497 5.12247 20.0409 5.50984 19.6515L19.1136 6.04747C19.681 5.47889 19.9998 4.70837 19.9998 3.90504C19.9998 3.10171 19.681 2.3312 19.1136 1.76261ZM4.3272 18.4688C3.85548 18.9374 3.21813 19.2012 2.55324 19.2032H1.67253V18.3224C1.67168 17.9928 1.73622 17.6663 1.86242 17.3618C1.98861 17.0573 2.17395 16.7808 2.40771 16.5484L12.7311 6.22479L14.6548 8.1485L4.3272 18.4688ZM17.9301 4.86481L15.8341 6.96166L13.9104 5.04212L16.0072 2.94528C16.1336 2.81924 16.2835 2.71931 16.4484 2.65121C16.6133 2.5831 16.79 2.54815 16.9685 2.54834C17.1469 2.54853 17.3236 2.58387 17.4883 2.65234C17.6531 2.7208 17.8028 2.82105 17.9288 2.94737C18.0549 3.07368 18.1548 3.22358 18.2229 3.38851C18.291 3.55344 18.3259 3.73017 18.3258 3.90861C18.3256 4.08705 18.2902 4.2637 18.2218 4.42849C18.1533 4.59327 18.053 4.74295 17.9267 4.86899L17.9301 4.86481Z" fill="black" />
            </svg>
          </Flex>
        </Flex>
        <Button onClick={() => setmodalAddActive(true)} margin={'16px 0 0 0'}>
          Добавить
        </Button>
      </Flex>
      {isLoading
        ? <Flex
          mt={'100px'}
          justify={'center'}
        >
          <CircularProgress />
        </Flex>
        :
        <>
          <Table />
          <ModalConteiner
            active={modalAddActive}
            setActive={() => setmodalAddActive(false)}
            title={'Создание заметки'}
          >
            <Input
              label={'Введите заголовок:'}
              htmlFor={'title'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type={'text'}
            />
            <Input
              label={'Введите текст заметки:'}
              htmlFor={'text'}
              value={text}
              onChange={(e) => setText(e.target.value)}
              type={'text'}
            />
            <Flex
              justify={'center'}
            >
              <Button onClick={onClickAddButton}>
                Добавить
              </Button>
            </Flex>
          </ModalConteiner>
        </>
      }
      <Div
        mb={'100px'}
      >
        <Pagination
          page={currentPage}
          onChange={(e: React.ChangeEvent<unknown>, page: number) => setCurrentPage(page)}
          count={3}
        />
      </Div>
      <ToastContainer
        toastStyle={{ borderRadius: '10px' }}
        progressStyle={{ background: '#0169ed' }}
        position="bottom-right"
        autoClose={5000}
        pauseOnHover={false}

      />
    </>
  )
}
