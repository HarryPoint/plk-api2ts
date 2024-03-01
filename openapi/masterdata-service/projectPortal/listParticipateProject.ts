import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目门户相关/listParticipateProjectUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProjectPortalResponseObject>(
        {
            url: "/masterdata-service/projectPortal/listParticipateProject",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目门户响应对象»» */
export interface IJSONResultListProjectPortalResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectPortalResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目门户响应对象 */
export interface IProjectPortalResponseObject {
    /** 项目编号 */
    code?: string;
    /** 项目id */
    id?: string;
    /** 项目名称 */
    name?: string;
    /** undefined */
    projectManagerId?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 项目状态 */
    projectStatus?: EProjectPortalResponseObject_projectStatus;
    /** undefined */
    projectTypeId?: string;
    /** 项目类型名称 */
    projectTypeName?: string;
}

export enum EProjectPortalResponseObject_projectStatus {
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 审批中 */
    IN_APPROVE = "IN_APPROVE",
    /** 审批拒绝 */
    APPROVAL_DENIED = "APPROVAL_DENIED",
    /** 进行中 */
    IN_PROGRESS = "IN_PROGRESS",
    /** 已关闭 */
    COMPLETE = "COMPLETE",
    /** 已终止 */
    END = "END"
}
