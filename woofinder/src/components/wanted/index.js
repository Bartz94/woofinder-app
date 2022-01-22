//Bartosz
import styled from 'styled-components';

const WantedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 `;

const WantedContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 120px
 `;


export const Wanted = () => {
    return <>
        <WantedContainer>
            <h1 sx={{ justifySelf: 'left' }}>Liczba zaginięć zwierząt:{Math.floor(Math.random() * 100)}</h1>
            <WantedContent>
                <div>
                    <img src="https://picsum.photos/100/100" alt="img" />
                </div>
                <div>
                    <h2>Lulek</h2>
                </div>
                <div>
                    <h3>Cechy zwierzaka:</h3>
                    <p>Lorem lorem lorem lorasdasdasd</p>
                </div>
                <div>
                    <h4>Zobacz na mapie</h4>
                </div>
                <div>
                    <h4>Warszawa</h4>
                </div>
                <div>
                    <h4>Jeśli widziałeś zwierzaka napisz</h4>
                </div>
                <div>
                    <h4>Pokaż więcej</h4>
                </div>
            </WantedContent>
            <WantedContent>
                <div>
                    <img src="https://picsum.photos/100/100" alt="img" />
                </div>
                <div>
                    <h2>Lulek</h2>
                </div>
                <div>
                    <h3>Cechy zwierzaka:</h3>
                    <p>Lorem lorem lorem lorasdasdasd</p>
                </div>
                <div>
                    <h4>Zobacz na mapie</h4>
                </div>
                <div>
                    <h4>Warszawa</h4>
                </div>
                <div>
                    <h4>Jeśli widziałeś zwierzaka napisz</h4>
                </div>
                <div>
                    <h4>Pokaż więcej</h4>
                </div>
            </WantedContent>
        </WantedContainer>
    </>;
};
