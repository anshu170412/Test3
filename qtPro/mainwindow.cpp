#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <opencv2/opencv.hpp>
#include <opencv2/core/core.hpp>
#include <opencv2/highgui/highgui.hpp>


MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
    // read an image
        cv::Mat image = cv::imread("/home/pushp/Pictures/codenation.png", 1);
        // create image window named "My Image"
        cv::namedWindow("My Image");
        // show the image on window
        cv::rectangle(image, cv::Point(50,100), cv::Point(200,200), cv::Scalar( 0, 55, 255 ), +1, 4 );

        cv::imshow("My Image", image);
}
