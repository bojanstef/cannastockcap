import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { TableHeader, TableBody } from '.';

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companies: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/listings')
        .then(response => response.json())
        .then(json => {
            this.setState({companies: json.data});
        });
    }

    render() {
        return (
            <div className={`container-fluid main-container ${css(styles.tableContainer)}`}>
                <div className="table-responsive">
                    <div>
                        <p className={css(styles.tableTitle)}>Top Cannabis Companies by Market Capitalization</p>
                    </div>
                    <table className="table table-hover">
                        <TableHeader />
                        <TableBody companies={this.state.companies} />
                    </table>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    tableContainer: {
        marginTop: '8%',
        '@media (min-width: 1000px)': {
            paddingRight: '8%',
        }
    },
    tableTitle: {
        textAlign: 'center',
        fontSize: 32,
    },
});
