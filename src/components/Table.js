import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export class Table extends Component {
    render() {
        return (
            <div className={`container ${css(styles.tableContainer)}`}>
                <div className="table-responsive">
                    <div>
                        <p className={css(styles.tableTitle)}>Top Cannabis Companies by Market Capitalization</p>
                    </div>
                    <table className="table table-hover">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Volume</th>
                        <th>Shares</th>
                        <th>Change (24h)</th>
                        <th>Price Graph (7d)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>sit</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>sit</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>amet</td>
                            <td>consectetur</td>
                            <td>adipiscing</td>
                            <td>elit</td>
                            <td>consectetur</td>
                            <td>adipiscing</td>
                            <td>elit</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Integer</td>
                            <td>nec</td>
                            <td>odio</td>
                            <td>Praesent</td>
                            <td>nec</td>
                            <td>odio</td>
                            <td>Praesent</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>libero</td>
                            <td>Sed</td>
                            <td>cursus</td>
                            <td>ante</td>
                            <td>Sed</td>
                            <td>cursus</td>
                            <td>ante</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Nulla</td>
                            <td>quis</td>
                            <td>sem</td>
                            <td>at</td>
                            <td>quis</td>
                            <td>sem</td>
                            <td>at</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>nibh</td>
                            <td>elementum</td>
                            <td>imperdiet</td>
                            <td>Duis</td>
                            <td>nibh</td>
                            <td>elementum</td>
                            <td>imperdiet</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>sagittis</td>
                            <td>ipsum</td>
                            <td>Praesent</td>
                            <td>mauris</td>
                            <td>sagittis</td>
                            <td>ipsum</td>
                            <td>Praesent</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Fusce</td>
                            <td>nec</td>
                            <td>tellus</td>
                            <td>sed</td>
                            <td>Fusce</td>
                            <td>nec</td>
                            <td>tellus</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>augue</td>
                            <td>semper</td>
                            <td>porta</td>
                            <td>Mauris</td>
                            <td>augue</td>
                            <td>semper</td>
                            <td>porta</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>massa</td>
                            <td>Vestibulum</td>
                            <td>lacinia</td>
                            <td>arcu</td>
                            <td>massa</td>
                            <td>Vestibulum</td>
                            <td>lacinia</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>eget</td>
                            <td>nulla</td>
                            <td>Class</td>
                            <td>aptent</td>
                            <td>nulla</td>
                            <td>Class</td>
                            <td>aptent</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    tableContainer: {
        marginTop: '8%',
    },
    tableTitle: {
        textAlign: 'center',
        fontSize: 32,
    },
});
