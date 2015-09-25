
file(
    GLOB
    headers
    *.hpp
)

file(
    GLOB
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
