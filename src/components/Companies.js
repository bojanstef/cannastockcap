import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { TableHeader, TableBody } from '.';

export class Companies extends Component {
    render() {
        return (
            <div className={`container-fluid main-container ${css(styles.tableContainer)}`}>
                <div className="table-responsive">
                    <div>
                        <p className={css(styles.tableTitle)}>Top Cannabis Companies by Market Capitalization</p>
                    </div>
                    <table className="table table-hover">
                        <TableHeader />
                        <TableBody companies={this.props.companies} />
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
