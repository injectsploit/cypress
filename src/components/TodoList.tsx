import React from 'react';
import TodoItem from 'components/TodoItem';
import styled from "styled-components";

const StyledTodoList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

interface Props {
    list: {
        id: string,
        todo: string
    }[];
    onRemove: Function;
}

const TodoList = ({ list, onRemove }: Props) => {

    return (
        <StyledTodoList>
            {
                list.map(({ id, todo }) => (
                    <TodoItem name={todo} onRemove={onRemove} key={id} id={id} />
                ))
            }
        </StyledTodoList>
    )
};

export default TodoList;