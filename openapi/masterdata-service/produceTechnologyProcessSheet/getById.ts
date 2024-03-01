import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/生产工艺工艺卡相关/getByIdUsingGET_11
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessCardInformationIsReturnedToTheDTO>(
        {
            url: "/masterdata-service/produceTechnologyProcessSheet/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产工艺工艺卡信息返回DTO» */
export interface IJSONResultProcessCardInformationIsReturnedToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionProcessProcessCardInformationIsReturnedToDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产工艺工艺卡信息返回DTO */
export interface IProductionProcessProcessCardInformationIsReturnedToDTO {
    /** 工艺卡编号 */
    code?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 文件集合 */
    fileList?: IProductionProcessProcessCardDetailsReturnedToDTO[];
    /** id */
    id?: string;
    /** 物料id */
    materialId?: string;
    /** 工艺卡名称 */
    name?: string;
    /** 工序对应字段信息 */
    processFlowPathRpDatas?: IOperationsCorrespondToFieldDetailsVO[];
    /** 工序id */
    processId?: string;
    /** 生产工艺id */
    produceTechnologyId?: string;
    /** 描述集合 */
    textList?: IProductionProcessProcessCardDetailsReturnedToDTO[];
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}
/** 生产工艺工艺卡明细返回DTO */
export interface IProductionProcessProcessCardDetailsReturnedToDTO {
    /** 明细编号 */
    code: string;
    /** 文件key */
    fileKey?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件完整url */
    fileUrl?: string;
    /** 明细id */
    id?: string;
    /** 明细名称/标题 */
    name: string;
    /** 描述内容/备注 */
    remark?: string;
    /** 明细类型 */
    type?: EProductionProcessProcessCardDetailsReturnedToDTO_type;
}
/** 工序对应字段详情VO */
export interface IOperationsCorrespondToFieldDetailsVO {
    /** 关联字段code */
    fieldCode?: string;
    /** 关联字段名称 */
    fieldName?: string;
    /** 值 */
    value?: Record<string, any>;
}

export enum EProductionProcessProcessCardDetailsReturnedToDTO_type {
    /** 文件 */
    FILE = "FILE",
    /** 描述 */
    TEXT = "TEXT",
    /** 录入 */
    INPUT = "INPUT"
}
