import styled from "styled-components";
import Button from "./Button";
import $ from "jquery";
import React from "react";

const StyledButton = styled(Button)`
    border: 0;
`;

const Styles = styled.div`
    .search, table {
        width: 500px;
    }

    td span {
        font-weight: bold;
    }
`;

export class List extends React.Component {
    componentDidUpdate() {
        for(var i = 0; i < this.props.items.length; i++) {
            var item = this.props.items[i];
            
            if(this.props.search.length == 0 || $("#item-" + item.name).hasClass("checked")) {
                $("#item-" + item.name).show();
            } else {
                $("#item-" + item.name).hide();
            }
        }
    }

    render() {
        const { search, items } = this.props;

        const renderItem = (item) => {
            var checked = search.length > 0 && item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;

            return <tr id={"item-" + item.name} key={item.name + " " + checked} className={checked ? "checked" : ""}>
                <td><span className="strong">{item.name}</span></td>
                <td><StyledButton text="add" item={item} /></td>
            </tr>;
        }

        return <>
            <Styles>
                <table>
                    {items.map(item => renderItem(item))}
                </table>
            </Styles>
        </>;
    }
}