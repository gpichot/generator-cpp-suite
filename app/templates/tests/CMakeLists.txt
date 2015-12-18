

find_package(GTest REQUIRED)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -pthread")
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -pthread")

include_directories(
    ${CMAKE_SOURCE_DIR}/src
    ${GTEST_INCLUDE_DIRS}
)

file(
    GLOB_RECURSE
    test_files
    *.cpp
)

add_executable(Tests-<%= projectSlug %>
    ${test_files}
)

target_link_libraries(Tests-<%= projectSlug %>
    <%= projectSlug %>
    ${GTEST_BOTH_LIBRARIES}
)
