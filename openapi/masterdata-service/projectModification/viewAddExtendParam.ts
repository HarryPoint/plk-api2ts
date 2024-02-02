// 项目变更单扩展参数请求
export interface I项目变更单扩展参数请求 {
    // 字段数据列表
    fieldDataList: I项目变更单字段扩展参数请求[];
}
// 项目变更单字段扩展参数请求
export interface I项目变更单字段扩展参数请求 {
    // 字段编号
    fieldCode: string;
    // 操作类型
    operateType: string;
    // 旧值
    oldValue: string;
    // 新值
    newValue: string;
    // 子表数据列表
    childList: I项目变更单子表字段扩展参数请求_1[];
}
// 项目变更单子表字段扩展参数请求_1
export interface I项目变更单子表字段扩展参数请求_1 {
    // 行数据id
    dataId: string;
    // 行操作类型
    operateType: string;
    // 列数据
    columnData: I项目变更单字段扩展参数请求[];
}
