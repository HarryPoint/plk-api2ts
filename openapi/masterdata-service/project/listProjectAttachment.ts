import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/项目相关/listProjectAttachmentUsingGET
*/
export default function fetchMethod(options: { params: { flowPathId?: string; formRecordId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectAttachmentResponseDTO>(
        {
            url: "/masterdata-service/project/listProjectAttachment",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProjectAttachmentResponseDTO»» */
export interface IJSONResultListProjectAttachmentResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectAttachmentResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProjectAttachmentResponseDTO */
export interface IProjectAttachmentResponseDTO {
    /** 文件key */
    fileKey?: string;
    /** 文件大小 */
    size?: string;
    /** 项目文件ID */
    projectFileId?: string;
    /** 项目文件名 */
    projectFileName?: string;
    /** 表单记录ID */
    formRecordId?: string;
    /** 详细表单记录ID */
    detailFormRecordId?: string;
    /** 字段序列号 */
    fieldSerialNo?: string;
    /** 字段编码 */
    fieldCode?: string;
    /** 字段上级表格编码 */
    fieldParentTableCode?: string;
    /** 是否为首个关联，Y 代表该文件是当前表单上传的，N 代表为关联文件  */
    isFirstAssociation?: EProjectAttachmentResponseDTO_isFirstAssociation;
    /** 数据状态，  DELETED（-1） 代表删除 */
    dataStatus?: EProjectAttachmentResponseDTO_dataStatus;
}

export enum EProjectAttachmentResponseDTO_isFirstAssociation {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectAttachmentResponseDTO_dataStatus {
    /** 停用 */
    INVALID = "INVALID",
    /** 启用 */
    VALID = "VALID",
    /** 暂存 */
    STAGING = "STAGING",
    /** 已删除 */
    DELETED = "DELETED"
}
