import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产入库单相关/pageQuerySelectionItemUsingPOST_1
export function fetchMethod(data: IPaging13) {
    return post({
      url: "/masterdata-service/productionStockInOrder/pageQuerySelectionItem",
      data,
    });
}
// 分页_13
export interface IPaging13 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 生产批次列表
    productionLotNoList: string[];
    // 生产订单编号匹配
    produceOrderCodeMatch: string;
    // 生产物料ID
    produceMaterialIdList: number[];
    // 是否入库前先领料
    isBeforeStorageIssuanceMaterial: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«ProduceOrderSelectionItemQueryResponseDTO»»_1
export interface IProduceOrderSelectionItemQueryResponseDTO1JSONResultPagingInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePagingInformationProduceOrderSelectionItemQueryResponseDTO1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«ProduceOrderSelectionItemQueryResponseDTO»_1
export interface IThePagingInformationProduceOrderSelectionItemQueryResponseDTO1 {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IProduceOrderSelectionItemQueryResponseDTO1[];
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
// ProduceOrderSelectionItemQueryResponseDTO_1
export interface IProduceOrderSelectionItemQueryResponseDTO1 {
    // 生产订单ID
    produceOrderId: string;
    // 生产订单编码
    produceOrderCode: string;
    // 销售订单ID
    salesOrderId: number;
    // 销售订单编码
    salesOrderCode: string;
    // 物料ID
    materialId: number;
    // 物料编码
    materialCode: string;
    // 物料名称
    materialName: string;
    // 物料类型
    materialType: string;
    // 物料规格
    materialSpec: string;
    // 单位ID
    unitId: number;
    // 单位名称
    unitName: string;
    // 生产批次号
    productionLotNo: string;
    // 需入库数量
    toBeStockInQuantity: number;
    // 已入库数量
    stockInQuantity: number;
    // 未入库数量
    notStockInQuantity: number;
    // 已退库数量
    stockReturnedQuantity: number;
    // 仓库ID
    storehouseId: number;
    // 仓位ID
    warehouseId: number;
    // 仓库名称
    storehouseName: string;
    // 仓位名称
    warehouseName: string;
}
