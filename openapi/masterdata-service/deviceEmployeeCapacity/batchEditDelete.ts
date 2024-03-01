import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备人员能力相关/batchEditDeleteUsingPOST
*/
export default function fetchMethod(options: { data: IEquipmentPersonnelAbilityToBatchEditDtos }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/deviceEmployeeCapacity/batchEditDelete",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备人员能力批量编辑DTO */
export interface IEquipmentPersonnelAbilityToBatchEditDtos {
    /** 删除项列表 */
    deleteIds?: string[];
    /** 编辑项列表 */
    edits?: IEquipmentPersonnelAbilityToEditDTO[];
}
/** 设备人员能力编辑DTO */
export interface IEquipmentPersonnelAbilityToEditDTO {
    /** 班组id */
    classGroupId?: string;
    /** 编号 */
    code?: string;
    /** 部门id */
    departmentId?: string;
    /** 编辑能力明细 */
    detailEdits?: IEquipmentPersonnelCapabilityDetailsEditDTO[];
    /** 人员id */
    employeeId?: string;
    /** 人员能力id */
    id?: string;
}
/** 设备人员能力明细编辑DTO */
export interface IEquipmentPersonnelCapabilityDetailsEditDTO {
    /** 保养能力 */
    canMaintain?: EEquipmentPersonnelCapabilityDetailsEditDTO_canMaintain;
    /** 人员能力明细id */
    detailId?: string;
    /** 设备类型id */
    deviceTypeId?: string;
    /** 维修能力 */
    maintainLevel?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EEquipmentPersonnelCapabilityDetailsEditDTO_canMaintain {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
