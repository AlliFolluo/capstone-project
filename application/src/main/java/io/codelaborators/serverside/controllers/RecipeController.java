package io.codelaborators.serverside.controllers;

import io.codelaborators.serverside.models.ListItem;
import io.codelaborators.serverside.models.Recipe;
import io.codelaborators.serverside.repositories.ListItemRepository;
import io.codelaborators.serverside.repositories.RecipeRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin

public class RecipeController {

    @Resource
    private RecipeRepository recipeRepo;

    @GetMapping("/recipes")
    public Collection<Recipe> getRecipes(){
        return (Collection<Recipe>) recipeRepo.findAll();
    }
}