//
//  TLAddTodoItemViewController.m
//  Todo
//
//  Created by Taylor Lapeyre on 10/25/13.
//  Copyright (c) 2013 Taylor Lapeyre. All rights reserved.
//

#import "TLAddTodoItemViewController.h"

@interface TLAddTodoItemViewController ()
@property (weak, nonatomic) IBOutlet UITextField *textField;
@property (weak, nonatomic) IBOutlet UIBarButtonItem *doneButton;

@end

@implementation TLAddTodoItemViewController

- (void) prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    if (sender == self.doneButton && self.textField.text.length > 0) {
        self.toDoItem = [[TLToDoItem alloc] init];
        self.toDoItem.itemName = self.textField.text;
        self.toDoItem.completed = NO;
    }
}

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
