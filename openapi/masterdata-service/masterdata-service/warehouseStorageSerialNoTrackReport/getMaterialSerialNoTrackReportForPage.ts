// JSONResult«分页信息«物料序列号跟踪分页响应对象»»
export interface IJSONResultPagingInformationMaterialSerialNumberTracesPagingResponseObjects {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationMaterialSerialNumberTracksPageResponseObjects;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«物料序列号跟踪分页响应对象»
export interface IPageInformationMaterialSerialNumberTracksPageResponseObjects {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ITheMaterialSerialNumberTracksPagingResponseObjects[];
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
// 物料序列号跟踪分页响应对象
export interface ITheMaterialSerialNumberTracksPagingResponseObjects {
    // id
    id: number;
    // 库存记录id
    storageLogId: number;
    // 流程应用code
    masterDataFlowPathCode: string;
    // 所属主数据id (eg:物料id)
    masterDataId: number;
    // 物料code
    materialCode: string;
    // 物料名称
    materialName: string;
    // 物料规格
    materialSpec: string;
    // 物料单位
    materialUnit: string;
    // 仓位操作类型
    type: string;
    // 操作仓位id
    opWarehouseId: number;
    // 操作仓位名称
    opWarehouseName: string;
    // 操作仓库id
    opStorehouseId: number;
    // 操作仓库名称
    opStorehouseName: string;
    // 批次号
    lotNo: string;
    // 业务id
    businessId: number;
    // 单据编号
    businessNo: string;
    // 单据日期
    billDate: string;
    // 单据类型
    billName: string;
    // 单据流程code
    billFlowPathCode: string;
    // 单据状态
    businessStatus: string;
    // 序列号
    serialNo: string;
    // 序列号备注
    serialRemark: string;
}