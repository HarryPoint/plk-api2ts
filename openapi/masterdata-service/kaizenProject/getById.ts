import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/kaizen项目相关/getByIdUsingPOST
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultKaizenProjectResponseDTO>(
        {
            url: "/masterdata-service/kaizenProject/getById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«KaizenProjectResponseDTO» */
export interface IJSONResultKaizenProjectResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IKaizenProjectResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** KaizenProjectResponseDTO */
export interface IKaizenProjectResponseDTO {
    /** 项目编号 */
    code?: string;
    /** ID */
    id?: string;
    /** 项目名称 */
    name?: string;
    /** 项目截止日期 */
    projectEndDate?: number;
    /** 项目简介 */
    projectIntroduction?: string;
    /** 项目负责人 */
    projectLeaderId?: string;
    /** 项目负责人名称 */
    projectLeaderName?: string;
    /** 项目开始日期 */
    projectStartDate?: number;
    /** 项目状态 */
    projectStatus?: EKaizenProjectResponseDTO_projectStatus;
    /** 项目状态描述 */
    projectStatusDesc?: string;
    /** 关联合理化建议 */
    proposalId?: string;
    /** 项目类型 */
    type?: string;
    /** 项目类型描述 */
    typeDesc?: string;
}

export enum EKaizenProjectResponseDTO_projectStatus {
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 进行中 */
    IN_PROGRESS = "IN_PROGRESS",
    /** 已完成 */
    COMPLETED = "COMPLETED",
    /** 已取消 */
    CANCELED = "CANCELED"
}
