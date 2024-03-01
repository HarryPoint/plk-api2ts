import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/销售订单相关/getMasterMaterialByDetailIdUsingGET
*/
export default function fetchMethod(options: { params: { DetailId?: string } }, extraOptions?: any) {
    return http<IJSONResultMainMaterialInformationOfTheProductionOrder>(
        {
            url: "/masterdata-service/salesOrder/transferToProduceOrder/getMasterMaterialByDetailId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«转生产订单主物料信息» */
export interface IJSONResultMainMaterialInformationOfTheProductionOrder {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITransferProductionOrderMainMaterialInformation;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 转生产订单主物料信息 */
export interface ITransferProductionOrderMainMaterialInformation {
    /** 已转换数量 */
    convertCount?: number;
    /** 交货日期 */
    deliveryDate?: number;
    /** 启用批次 */
    enableLot?: ETransferProductionOrderMainMaterialInformation_enableLot;
    /** 启用批次 */
    enableQualityTraceability?: ETransferProductionOrderMainMaterialInformation_enableQualityTraceability;
    /** 启用序列号 */
    enableSerialNo?: ETransferProductionOrderMainMaterialInformation_enableSerialNo;
    /** 详情id */
    id?: string;
    /** 是否紧急订单 */
    isEmergentOrder?: ETransferProductionOrderMainMaterialInformation_isEmergentOrder;
    /** 层级 */
    level?: number;
    /** 批次方案id */
    lotSchemeId?: string;
    /** 主物料编号 */
    materialCode?: string;
    /** 主物料id */
    materialId?: string;
    /** 主物料名称 */
    materialName?: string;
    /** 主物料规格 */
    materialSpec?: string;
    /** 主物料库存 */
    materialStorageCount?: number;
    /** 主物料单位 */
    materialUnit?: string;
    /** 未转换数量 */
    notConvertCount?: number;
    /** 优先级 */
    priorityLevel?: number;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 销售订单名称 */
    salesOrderName?: string;
    /** 已选择标准工艺ID */
    selectedStandardTechnologyId?: string;
    /** 序列号方案id */
    serialNoSchemeId?: string;
    /** 标准生产工艺可选列表 */
    standardTechnologyOptionalList?: IStandardTechnologyDTO[];
    /** 交付数量 */
    totalCount?: number;
    /** 总销售数量 */
    totalSalesQuantity?: number;
}
/** StandardTechnologyDTO */
export interface IStandardTechnologyDTO {
    /** 标准工艺ID */
    id?: string;
    /** 标准工艺名称 */
    name?: string;
    /** 标准工艺所属分类ID */
    standardTechnologyCategoryId?: string;
    /** 标准工艺所属分类名称 */
    standardTechnologyCategoryName?: string;
}

export enum ETransferProductionOrderMainMaterialInformation_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETransferProductionOrderMainMaterialInformation_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETransferProductionOrderMainMaterialInformation_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETransferProductionOrderMainMaterialInformation_isEmergentOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
