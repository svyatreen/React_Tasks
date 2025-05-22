import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const onPreviousStepClick = () => {
		setActiveIndex(activeIndex - 1);
	};

	const onNextStepClick = () => {
		setActiveIndex(activeIndex + 1);
	};

	const onRestartStepsClick = () => {
		setActiveIndex(0);
	};

	const onStepSelectClick = (index) => {
		setActiveIndex(index);
	};

	const isOnFirstStep = activeIndex === 0;
	const isOnLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li
								key={id}
								className={
									styles['steps-item'] +
									(index <= activeIndex ? ' ' + styles.done : '') +
									(index === activeIndex ? ' ' + styles.active : ' ')
								}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => onStepSelectClick(index)}
								>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={onPreviousStepClick}
							disabled={isOnFirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isOnLastStep ? onRestartStepsClick : onNextStepClick}
						>
							{isOnLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
