// 质量人员下拉分页查询对象
export interface I质量人员下拉分页查询对象 {
    // 编号或名称
    codeOrName: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«质量人员下拉响应DTO»»
export interface IJSONResult分页信息质量人员下拉响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息质量人员下拉响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«质量人员下拉响应DTO»
export interface I分页信息质量人员下拉响应DTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I质量人员下拉响应DTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 质量人员下拉响应DTO
export interface I质量人员下拉响应DTO {
    // id
    id: number;
    // 员工编号
    employeeCode: string;
    // 员工姓名
    employeeName: string;
    // 可检验项目
    qmsInspectionItemName: string;
}
