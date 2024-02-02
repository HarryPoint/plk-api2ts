// 文件对象分页查询请求DTO
export interface I文件对象分页查询请求DTO {
    // 当前页面
    pageNo: number;
    // 文件来源
    fileForm: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 创建用户ID列表
    createUserIds: number[];
    // 导出字段集
    exportFields: string[];
    // 文件名
    name: string;
    // 文件分类ID列表
    fileCategoryIdList: number[];
    // 创建时间-开始
    createTimeBegin: string;
    // 创建时间-开始
    createTimeEnd: string;
}
// JSONResult«分页信息«文件对象分页查询响应DTO»»
export interface IJSONResult分页信息文件对象分页查询响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«文件对象分页查询响应DTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
