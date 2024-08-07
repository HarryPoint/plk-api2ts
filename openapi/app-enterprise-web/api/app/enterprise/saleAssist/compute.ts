import { http } from "@/api/http";

/**
* @author  
* @desc 计算销售交期应答辅助
* @link http://47.108.139.107:16400/doc.html#/default/02-01-02-销售交期应答辅助相关/computeUsingPOST
*/
export default function fetchMethod(options: { data: ISalesDeliveryResponseHelpsCalculateDTO }, extraOptions?: any) {
    return http<IJSONResultSalesDeliveryResponseAssistedReturnToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/saleAssist/compute",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 销售交期应答辅助计算DTO */
export interface ISalesDeliveryResponseHelpsCalculateDTO {
    /** 排产开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    beginTime: string;
    /** 数量, 只能输入正数，可以有小数点，小数点后2位 */
    count: number;
    /** 设计开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    designBeginTime?: string;
    /** 设计结束时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    designEndTime?: string;
    /** 是否优先级最高 */
    isHighest: ESalesDeliveryResponseHelpsCalculateDTO_isHighest;
    /** 物料id */
    materialId: string;
    /** 采购开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    purchaseBeginTime?: string;
    /** 采购结束时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    purchaseEndTime?: string;
    /** 生产工艺路径id */
    routingId?: string;
}
/** JSONResult«销售交期应答辅助返回VO» */
export interface IJSONResultSalesDeliveryResponseAssistedReturnToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISalesDeliveryResponseIsAssistedBackToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 销售交期应答辅助返回VO */
export interface ISalesDeliveryResponseIsAssistedBackToVO {
    /** 子物料信息集 */
    childMaterialInfos?: ISalesDeliveryResponseSupportMaterialReturnedToVO[];
    /** 设计完成时间 */
    designCompleteTime?: string;
    /** 预计整体交付时间 */
    leadTime?: string;
    /** 主物料信息 */
    materialInfo?: ISalesDeliveryResponseSupportMaterialReturnedToVO;
    /** 采购完成时间 */
    purchaseCompleteTime?: string;
}
/** 销售交期应答辅助物料返回VO */
export interface ISalesDeliveryResponseSupportMaterialReturnedToVO {
    /** 余量， 注：如果是正数，则显示 余量：xxx，  如果是负数，则显示 还需：xxx */
    allowanceCount?: number;
    /** 产能信息异常描述 */
    capacityWarning?: string;
    /** 子物料信息集 */
    childMaterialInfos?: ISalesDeliveryResponseSupportMaterialReturnedToVO[];
    /** 需求数量 */
    demandCount?: number;
    /** 是否完整配置了产能信息 */
    isSetCapacity?: ESalesDeliveryResponseSupportMaterialReturnedToVO_isSetCapacity;
    /** 物料编号 */
    materialCode?: string;
    /** id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料库存数 */
    materialStorageCount?: number;
    /** 工艺路径id */
    routingId?: string;
}

export enum ESalesDeliveryResponseHelpsCalculateDTO_isHighest {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESalesDeliveryResponseSupportMaterialReturnedToVO_isSetCapacity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
