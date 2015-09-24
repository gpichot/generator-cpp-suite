
include_directories(${CMAKE_SOURCE_DIR}/src)

add_executable(benchmarks-<%= projectSlug %>
   main.cpp 
)

target_link_libraries(benchmarks-<%= projectSlug %> <%= projectSlug %>)

install(
    PROGRAMS ${CMAKE_CURRENT_BINARY_DIR}/benchmarks-<%= projectSlug %>
    DESTINATION bin
    RENAME ${CMAKE_PROJECT_NAME}-benchmarks
)
