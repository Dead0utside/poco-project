package com.dead0uts1de.pocoProject.training;

import com.dead0uts1de.pocoProject.exercise.Exercise;
import com.dead0uts1de.pocoProject.exercise.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainingService {
    private final TrainingRepository trainingRepository;

    private final ExerciseService exerciseService;

    public Training getTrainingById(Long id) {
        return trainingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("training with id " + id + " not found"));
    }

    public List<Training> getAllTrainings() {
        return trainingRepository.findAll();
    }

    public void addTraining(Training training) {
        if (trainingRepository.existsByNameAndIncludedExercises(training.getName(), training.getIncludedExercises())) {
            throw new RuntimeException("this training already exists");
        }
        trainingRepository.save(training);
    }

    public void addExerciseToTraining(Long trainingId, Long exerciseId) {
        Training training = this.getTrainingById(trainingId);
        Exercise exercise = exerciseService.getExerciseById(exerciseId);
        training.addExerciseToTraining(exercise);
        trainingRepository.save(training);
    }

//    public List<Exercise> getExercisesInTraining(Long trainingId) {
//        if (!trainingRepository.existsById(trainingId)) {
//            throw new RuntimeException("training with id " + trainingId + " doesn't exist");
//        }
//        return trainingRepository.findExercisesForTraining(trainingId);
//    }
}
