// 安全库存搜索VO
export interface I安全库存搜索VO {
    // 当前页面
    pageNo: number;
    // 物料编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 物料名称
    name: string;
    // 库存预警类型
    warningType: string;
    // 设置类型
    type: string;
    // 对应业务id
    businessId: number;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«安全库存返回VO»»
export interface IJSONResult分页信息安全库存返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息安全库存返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«安全库存返回VO»
export interface I分页信息安全库存返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I安全库存返回VO[];
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
// 安全库存返回VO
export interface I安全库存返回VO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 规格
    spec: string;
    // 单位
    unit: string;
    // 库存总数
    storageTotalCount: number;
    // 库存锁定数
    storageLockCount: number;
    // 库存可使用数
    storageUseCount: number;
    // 是否开启预警
    isWarning: string;
    // 库存预警类型
    warningType: string;
    // 库存预警类型描述
    warningTypeDesc: string;
    // 安全库存数-采购触发下限
    safetyStock: number;
    // 最大库存数
    maxStock: number;
    // 最小库存数
    minStock: number;
}
