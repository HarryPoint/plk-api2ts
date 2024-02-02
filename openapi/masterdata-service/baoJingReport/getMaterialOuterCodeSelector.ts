// 物料主数据选择列表搜索VO
export interface I物料主数据选择列表搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 物料名称/编号
    nameOrCode: string;
    // 物料类型数组
    materialTypeList: string[];
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«物料主数据外部编码选择返回DTO»»
export interface IJSONResult分页信息物料主数据外部编码选择返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息物料主数据外部编码选择返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«物料主数据外部编码选择返回DTO»
export interface I分页信息物料主数据外部编码选择返回DTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I物料主数据外部编码选择返回DTO[];
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
// 物料主数据外部编码选择返回DTO
export interface I物料主数据外部编码选择返回DTO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 物料类型
    type: string;
    // 物料类型描述
    typeDesc: string;
    // 单位
    unit: string;
    // 规格
    spec: string;
    // 版次号
    issueCode: string;
    // 库存可使用数
    storageUseCount: number;
    // 是否有bom
    hasBom: string;
    // 外部编码
    outsideCode: string;
}
