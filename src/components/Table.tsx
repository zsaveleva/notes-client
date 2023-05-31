import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from './Buttons/Button'
import { Flex } from '../styles/Flex.styled'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import { ModalConteiner } from './ModalContainer'
import { StyledP } from '../styles/Fonts.styled'
import { setModalDelete, setModalEditing } from '../redux/slices/modal'
import { Note, fetchRemoveNote, update } from '../redux/slices/notes'
import { Input } from './Input'
import axios from '../axios'
import { ToastContainer, toast } from 'react-toastify'

const StyledTable = styled('table')`
    & {
        width: 100%;
        margin-bottom: 30px;
	    border-collapse: collapse; 
        box-shadow: 0 4px 20px #00000014;
        position: relative;
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -khtml-border-radius: 10px;
    }
`

const StyledTh = styled('th')`
    & {
        font-weight: bold;
	    text-align: left;
	    padding: 16px 20px;
	    background: #e5e5e5;
	    font-size: 14px;
    }

    &:first-child {
        border-radius: 10px 0 0 0;
    }

    &:last-child {
        border-radius: 0 10px 0 0;
    }
`

const StyledTd = styled('td') <{ width?: string }>`
    & {
        text-align: left;
	    padding: 16px 20px;
	    font-size: 14px;
	    vertical-align: top;
        border-bottom: 1px solid #ddd;
        width: ${props => props.width || ''};
    }
`

const StyledTdButtons = styled('td')`
    & {
        border-bottom: 1px solid #ddd;
        width: 19%;
        padding: 16px 20px;
    }
`

const StyledTr = styled('tr')`
    &:last-child td {
        border-bottom:0;
        border-radius: 0 10px;
    }
`

export const Table: FC = () => {
    const dispatch = useAppDispatch()

    const notes = useAppSelector(state => state.notes.items)

    const modalDelete = useAppSelector(state => state.modal.modalDelete)
    const modalEditing = useAppSelector(state => state.modal.modalEditing)

    const [updatedTitle, setUpdatedTitle] = useState<string>('')
    const [updatedText, setUpdatedText] = useState<string>('')

    const [removeNoteId, setRemoveNoteId] = useState<string>('')
    const [updateNoteId, setUpdateNoteId] = useState<string>('')

    //Оповещение об обновлении
    const updateNoteNotify = () => toast('Данные обновлены')

    //Оповещение об удалении
    const deleteNoteNotify = () => toast('Данные удалены')

    const onClickEditingButton = async () => {
        try {
            const fields = {
                title: updatedTitle,
                text: updatedText
            }
            const id = updateNoteId
            await axios.patch<Note>(`/notes/${id}`, fields)
            const newNote = {
                updatedTitle,
                updatedText,
                id
            }
            dispatch(update(newNote))
            updateNoteNotify()
            dispatch(setModalEditing(false))
        } catch (error) {
            console.error(error)
        }
    }

    const onClickRemoveButton = () => {
        try {
            dispatch(fetchRemoveNote(removeNoteId))
            deleteNoteNotify()
            dispatch(setModalDelete(false))
        } catch (error) {
            console.error(error)
        }
    }

    // Редактирование объекта
    useEffect(() => {
        const note = notes.find(note => note._id === updateNoteId)
        if (note) {
            setUpdatedTitle(note.title)
            setUpdatedText(note.text)
        }
    }, [updateNoteId])

    return (
        <>
            <StyledTable>
                <thead>
                    <tr style={{ position: 'sticky', top: '0', zIndex: '50' }}>
                        <StyledTh>Заголовок</StyledTh>
                        <StyledTh>Текст заметки</StyledTh>
                        <StyledTh></StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((el) => {
                        return (
                            <StyledTr
                                key={el._id}
                            >
                                <StyledTd>{el.title}</StyledTd>
                                <StyledTd>{el.text}</StyledTd>
                                <StyledTdButtons>
                                    <Flex
                                        wrap={'wrap'}
                                        gap={'8px'}
                                    >
                                        <Button
                                            padding={'8px 12px'}
                                            backgroundColor={'#E67A00'}
                                            backgroundColorHover={'rgb(217 115 0)'}
                                            onClick={() => {
                                                dispatch(setModalEditing(true))
                                                setUpdateNoteId(el._id) //Получение id объекта редактирования
                                            }}
                                        >
                                            Редактировать
                                        </Button>
                                        <Button
                                            padding={'8px 12px'}
                                            backgroundColor={'#ed0101'}
                                            backgroundColorHover={'rgb(213 2 2)'}
                                            onClick={() => {
                                                dispatch(setModalDelete(true))
                                                setRemoveNoteId(el._id) //Получение id объекта удаления
                                            }}
                                        >
                                            Удалить
                                        </Button>
                                    </Flex>
                                </StyledTdButtons>
                            </StyledTr>
                        )
                    })}
                </tbody>
            </StyledTable>
            <ModalConteiner
                active={modalDelete}
                setActive={() => dispatch(setModalDelete(false))}
                title={'Подтвердите действие'}
            >
                <StyledP
                    color={'#ed0101'}
                    fontSize={'14px'}
                >
                    Вы действительно хотите удалить заметку?
                </StyledP>
                <Flex
                    justify={'space-around'}
                    mt={'24px'}
                >
                    <Button
                        padding={'8px 12px'}
                        backgroundColor={'#ed0101'}
                        backgroundColorHover={'rgb(213 2 2)'}
                        onClick={onClickRemoveButton}
                    >
                        Удалить
                    </Button>
                    <Button
                        padding={'8px 12px'}
                        backgroundColor={'rgb(0 0 0 / 8%)'}
                        backgroundColorHover={'rgb(0 0 0 / 10%)'}
                        color={'#000'}
                        onClick={() => dispatch(setModalDelete(false))}
                    >
                        Отмена
                    </Button>
                </Flex>
            </ModalConteiner>
            <ModalConteiner
                active={modalEditing}
                setActive={() => dispatch(setModalEditing(false))}
                title={'Редактировние заметки'}
            >
                <Input
                    label={'Измените заголовок:'}
                    htmlFor={'title'}
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    type={'text'}
                />
                <Input
                    label={'Измените текст заметки:'}
                    htmlFor={'text'}
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                    type={'text'}
                />
                <Flex
                    justify={'center'}
                >
                    <Button onClick={onClickEditingButton}>
                        Сохранить
                    </Button>
                </Flex>
            </ModalConteiner>
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
