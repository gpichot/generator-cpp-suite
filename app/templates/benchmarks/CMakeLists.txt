include_directories(/usr/local/include/)
include_directories(${CMAKE_SOURCE_DIR}/src)

file(
    GLOB_RECURSE
    benchmarks_files
    *.cpp
)

add_executable(benchmarks-<%= projectSlug %>
   ${benchmarks_files}
)

target_link_libraries(benchmarks-<%= projectSlug %>
    <%= projectSlug %>
    /usr/local/lib/libbenchmark.a
)

install(
    PROGRAMS ${CMAKE_CURRENT_BINARY_DIR}/benchmarks-<%= projectSlug %>
    DESTINATION bin
    RENAME ${CMAKE_PROJECT_NAME}-benchmarks
)
