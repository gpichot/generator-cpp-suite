

add_library(
    <%= projectSlug %>
    SHARED
    default.cpp
)

install(
    TARGETS <%= projectSlug %>
    DESTINATION lib
)

file(
    GLOB
    headers
    *.hpp
)

install(
    FILES ${headers}
    DESTINATION include/${CMAKE_PROJECT_NAME}
)
