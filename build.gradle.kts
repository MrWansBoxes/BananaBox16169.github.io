plugins {
    base
}

tasks.register<Exec>("npmInstall") {
    group = "build"
    description = "Installs node dependencies"
    commandLine("npm", "install")
}

tasks.register<Exec>("dev") {
    group = "application"
    description = "Starts the Astro dev server"
    dependsOn("npmInstall")
    commandLine("npm", "run", "dev")
}

tasks.register<Exec>("buildSite") {
    group = "build"
    description = "Builds the Astro site"
    dependsOn("npmInstall")
    commandLine("npm", "run", "build")
}

tasks.named("build") {
    dependsOn("buildSite")
}
