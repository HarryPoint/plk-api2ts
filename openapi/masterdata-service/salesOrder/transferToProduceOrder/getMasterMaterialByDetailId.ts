import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/销售订单相关/getMasterMaterialByDetailIdUsingGET
*/
export default function fetchMethod(params: { detailId: number }, extraOptions?: any) {
    return http<IJSONResultMainMaterialInformationOfTheProductionOrder>(
        {
            url: "/masterdata-service/salesOrder/transferToProduceOrder/getMasterMaterialByDetailId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«转生产订单主物料信息» */
export interface IJSONResultMainMaterialInformationOfTheProductionOrder {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ITransferProductionOrderMainMaterialInformation;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 转生产订单主物料信息 */
export interface ITransferProductionOrderMainMaterialInformation {
    /** 详情id */
    id: number;
    /** 销售订单id */
    salesOrderId: number;
    /** 销售订单名称 */
    salesOrderName: string;
    /** 销售订单号 */
    salesOrderCode: string;
    /** 主物料id */
    materialId: number;
    /** 主物料名称 */
    materialName: string;
    /** 主物料编号 */
    materialCode: string;
    /** 主物料规格 */
    materialSpec: string;
    /** 主物料单位 */
    materialUnit: string;
    /** 总销售数量 */
    totalSalesQuantity: number;
    /** 主物料库存 */
    materialStorageCount: number;
    /** 交付数量 */
    totalCount: number;
    /** 已转换数量 */
    convertCount: number;
    /** 未转换数量 */
    notConvertCount: number;
    /** 交货日期 */
    deliveryDate: string;
    /** 层级 */
    level: number;
    /** 优先级 */
    priorityLevel: number;
    /** 是否紧急订单 */
    isEmergentOrder: string;
    /** 标准生产工艺可选列表 */
    standardTechnologyOptionalList: IStandardTechnologyDTO[];
    /** 已选择标准工艺ID */
    selectedStandardTechnologyId: number;
    /** 序列号方案id */
    serialNoSchemeId: number;
    /** 批次方案id */
    lotSchemeId: number;
    /** 启用序列号 */
    enableSerialNo: string;
    /** 启用批次 */
    enableLot: string;
    /** 启用批次 */
    enableQualityTraceability: string;
}
/** StandardTechnologyDTO */
export interface IStandardTechnologyDTO {
    /** 标准工艺ID */
    id: number;
    /** 标准工艺名称 */
    name: string;
    /** 标准工艺所属分类名称 */
    standardTechnologyCategoryName: string;
    /** 标准工艺所属分类ID */
    standardTechnologyCategoryId: number;
}
