#-------------------------------------------------
#
# Project created by QtCreator 2017-08-18T21:13:51
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = qtPro
TEMPLATE = app

INCLUDEPATH += /usr/local/include/opencv
LIBS += -L/usr/local/lib -lopencv_core -lopencv_imgcodecs -lopencv_highgui

SOURCES += main.cpp\
        mainwindow.cpp

HEADERS  += mainwindow.h

FORMS    += mainwindow.ui

INCLUDEPATH += C:\openCV\opencv\build\include

LIBS += C:\openCV\opencv\build\bin\libopencv_core330.dll
LIBS += C:\openCV\opencv\build\bin\libopencv_highgui330.dll
LIBS += C:\openCV\opencv\build\bin\libopencv_imgcodecs330.dll
LIBS += C:\openCV\opencv\build\bin\libopencv_imgproc330.dll
LIBS += C:\openCV\opencv\build\bin\libopencv_features2d330.dll
LIBS += C:\openCV\opencv\build\bin\libopencv_calib3d330.dll
