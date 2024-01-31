// 销售交期应答辅助计算DTO
export interface 销售交期应答辅助计算DTO {
    materialId: integer;
    routingId: integer;
    count: number;
    beginTime: string;
    isHighest: string;
    designBeginTime: string;
    designEndTime: string;
    purchaseBeginTime: string;
    purchaseEndTime: string;
}
// JSONDEMO
export interface JSONDEMO {
    code: integer;
    msg: string;
    data: 销售交期应答辅助返回VO;
    ts: integer;
}
// 销售交期应答辅助返回VO
export interface 销售交期应答辅助返回VO {
    materialInfo: 销售交期应答辅助物料返回VO;
    childMaterialInfos: array;
    leadTime: string;
    designCompleteTime: string;
    purchaseCompleteTime: string;
}
// 销售交期应答辅助物料返回VO
export interface 销售交期应答辅助物料返回VO {
    materialId: integer;
    materialName: string;
    materialCode: string;
    routingId: integer;
    materialStorageCount: number;
    demandCount: number;
    allowanceCount: number;
    isSetCapacity: string;
    capacityWarning: string;
    childMaterialInfos: array;
}
