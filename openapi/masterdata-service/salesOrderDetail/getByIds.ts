import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/销售订单明细相关/getByIdsUsingPOST_7
*/
export default function fetchMethod(data: number[], params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListSalesOrderDetailsReturnToVO>(
        {
            url: "/masterdata-service/salesOrderDetail/getByIds",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«销售订单详情返回VO»» */
export interface IJSONResultListSalesOrderDetailsReturnToVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ISalesOrderDetailsBackToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 销售订单详情返回VO */
export interface ISalesOrderDetailsBackToVO {
    /** 详情id */
    id: number;
    /** 销售订单id */
    salesOrderId: number;
    /** 销售订单名称 */
    salesOrderName: string;
    /** 销售订单号 */
    salesOrderCode: string;
    /** 对应物料id */
    materialId: number;
    /** 对应物料名称 */
    materialName: string;
    /** 总销售数量 */
    totalSalesQuantity: number;
    /** 对应物料编号 */
    materialCode: string;
    /** 对应物料规格 */
    materialSpec: string;
    /** 对应物料单位 */
    materialUnit: string;
    /** 对应物料库存 */
    materialStorageCount: number;
    /** 对应物料bomId */
    materialBomId: number;
    /** 对应物料bom名称 */
    materialBomName: string;
    /** 对应物料bom编号 */
    materialBomCode: string;
    /** 对应生产工艺路径id */
    routingId: number;
    /** 对应工艺路径名称 */
    routingName: string;
    /** 对应工艺路径编号 */
    routingCode: string;
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
    /** 未转换数量 */
    notConvertQuantity: number;
    /** 子物料生产信息 */
    childMaterialProduces: ISubMaterialProductionInformationVO1[];
    /** 生产所需其他物料 */
    produceOtherMaterials: IOtherMaterialInformationRequiredForProductionVO[];
}
/** 子物料生产信息VO_1 */
export interface ISubMaterialProductionInformationVO1 {
    /** 物料bom明细id */
    materialBomDetailId: number;
    /** 物料id */
    materialId: number;
    /** 物料名称 */
    materialName: string;
    /** 物料编号 */
    materialCode: string;
    /** 物料单位 */
    materialUnit: string;
    /** 物料库存数 */
    materialStorageCount: number;
    /** 物料计算消耗数量 */
    totalConsumeCount: number;
    /** 总生产数量 */
    totalCount: number;
    /** 需求数量 */
    demandQuantity: number;
    /** 层级 */
    level: number;
    /** 父级物料id */
    parentMaterialId: number;
    /** 父级物料名称 */
    parentMaterialName: string;
    /** 父级物料编号 */
    parentMaterialCode: string;
    /** 父级物料bomId */
    parentMaterialBomId: number;
    /** 父级物料bom名称 */
    parentMaterialBomName: string;
    /** 父级物料bom编号 */
    parentMaterialBomCode: string;
    /** 优先级 */
    priorityLevel: number;
    /** 子物料工艺路径选择集合, 默认选中 isDefault = Y的 */
    routingSelector: IProcessPathSelectionVO[];
}
/** 工艺路径选择VO */
export interface IProcessPathSelectionVO {
    /** id */
    id: number;
    /** 工艺路径名称 */
    name: string;
    /** 工艺路径编号 */
    code: string;
    /** 是否物料默认 */
    isDefault: string;
    /** 物料bomId */
    materialBomId: number;
    /** 物料bom名称 */
    materialBomName: string;
    /** 物料bom编号 */
    materialBomCode: string;
    /** 物料ID */
    materialId: number;
}
/** 生产所需其他物料信息VO */
export interface IOtherMaterialInformationRequiredForProductionVO {
    /** 物料bom明细id */
    materialBomDetailId: number;
    /** 物料id */
    materialId: number;
    /** 物料名称 */
    materialName: string;
    /** 物料编号 */
    materialCode: string;
    /** 物料单位 */
    materialUnit: string;
    /** 物料库存数 */
    materialStorageCount: number;
    /** 物料计算消耗数量 */
    totalConsumeCount: number;
    /** 总生产数量 */
    totalCount: number;
    /** 需求数量 */
    demandQuantity: number;
    /** 层级 */
    level: number;
    /** 父级物料id */
    parentMaterialId: number;
    /** 父级物料名称 */
    parentMaterialName: string;
    /** 父级物料编号 */
    parentMaterialCode: string;
    /** 父级物料bomId */
    parentMaterialBomId: number;
    /** 父级物料bom名称 */
    parentMaterialBomName: string;
    /** 父级物料bom编号 */
    parentMaterialBomCode: string;
    /** 优先级 */
    priorityLevel: number;
    /** 子物料工艺路径选择集合, 默认选中 isDefault = Y的 */
    routingSelector: IProcessPathSelectionVO[];
    /** 替换物料集 */
    changeMajorDatas: ISubMaterialProductionInformationVO1[];
    /** 原物料信息 - 用于重置物料 */
    sourceMajorData: IOtherMaterialInformationRequiredForProductionVO;
}
