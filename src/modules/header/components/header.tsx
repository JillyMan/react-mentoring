import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SearchBox } from './search';
import Paper from '@mui/material/Paper';
import { MainLogo } from '../../shared/main-logo';
import { AddMovieButtonContainer } from '../../configuration-movie/containers/configration-movie-add-container';
import BackgroundImage from '../../../assets/imges/header-bg.png';
import { MovieConfig } from '../../../shared/types/movies';

interface Props {
	avaliableGenres: string[];
	onAddMovieClick: (movie: MovieConfig) => void;
	onSearchClick: (search: string) => void;
}

const styles = {
	paperContainer: {
		backgroundImage: `url(${BackgroundImage})`,
		opacity: 1.0,
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
	},
	searchTitle: {
		fontFamily: 'Montserrat',
		fontWeight: 300,
		fontSize: '40px',
		lineHeight: '49px',
	}
};

export const Header = ({
	avaliableGenres,
	onAddMovieClick,
	onSearchClick
}: Props) => {
	return (
		<Paper style={styles.paperContainer} square>
			<Box sx={{ width: '100%' }}>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={1} />
					<Grid item xs={8}>
						<MainLogo />
					</Grid>
					<Grid item xs={2}>
						<AddMovieButtonContainer
							avaliableGenres={avaliableGenres}
							onSubmitClick={onAddMovieClick}
						/>
					</Grid>
					<Grid item xs={1} />
					<Grid item xs={12} sx={{ marginLeft: '150px' }}>
						<p style={styles.searchTitle}>
							FIND YOUR MOVIE
						</p>
					</Grid>
					<Grid item xs={12} sx={{ marginLeft: '150px', marginBottom: '100px' }}>
						<SearchBox text="What do your want to watch?" onSearchClick={(s) => onSearchClick(s)} />
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
};
