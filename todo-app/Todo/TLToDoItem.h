//
//  TLToDoItem.h
//  Todo
//
//  Created by Taylor Lapeyre on 10/30/13.
//  Copyright (c) 2013 Taylor Lapeyre. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface TLToDoItem : NSObject

@property NSString *itemName;
@property BOOL completed;
@property (readonly) NSDate *creationDate;

@end
