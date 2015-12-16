
# Add CPP Check
include(CppcheckTargets)
add_cppcheck_sources(test UNUSED_FUNCTIONS STYLE POSSIBLE_ERRORS FORCE)

file(
    GLOB_RECURSE
    headers
    *.hpp
)

file(
    GLOB_RECURSE
    sources
    *.cpp
)

add_library(
    <%= projectSlug %>
    SHARED
    ${sources}
    ${headers}
)

install(
    TARGETS <%= projectSlug %>
    DESTINATION lib
)

install(
    FILES ${headers}
    DESTINATION include/${CMAKE_PROJECT_NAME}
)
