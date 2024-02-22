// 分页_8
export interface IPaging8 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 生产订单ID
    produceOrderId: number;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«ProduceMaterialReturnQueryResponseDTO»»
export interface IProduceMaterialReturnQueryResponseDTOJSONResultPagingInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePagingInformationProduceMaterialReturnQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«ProduceMaterialReturnQueryResponseDTO»
export interface IThePagingInformationProduceMaterialReturnQueryResponseDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IProduceMaterialReturnQueryResponseDTO[];
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
// ProduceMaterialReturnQueryResponseDTO
export interface IProduceMaterialReturnQueryResponseDTO {
    // ID
    id: number;
    // 主数据ID/生产退料ID
    masterDataId: number;
    // 生产退料编码
    produceMaterialReturnOrderCode: string;
    // 单据日期
    billDate: string;
    // 生产领料ID
    productionMaterialIssuanceOrderId: number;
    // 生产领料编码
    productionMaterialIssuanceOrderCode: string;
    // 生产领料明细ID
    productionMaterialIssuanceOrderDetailId: number;
    // 退料人ID
    materialReturnEmployeeId: number;
    // 退料人名称
    materialReturnEmployeeName: string;
    // 退料部门ID
    materialReturnDepartmentId: number;
    // 退料部门名称
    materialReturnDepartmentName: string;
    // 物料ID
    materialId: number;
    // 物料编码
    materialCode: string;
    // 物料名称
    materialName: string;
    // 物料类型
    materialType: string;
    // 生产领料的批次号
    lotNo: string;
    // 已退料数量
    returnedQuantity: number;
    // 退料数量
    materialReturnQuantity: number;
    // 序列号列表
    serialNoList: Record<string, any>[];
}
