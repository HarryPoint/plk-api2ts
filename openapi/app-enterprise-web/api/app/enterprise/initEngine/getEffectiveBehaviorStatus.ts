import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/初始化引擎/getEffectiveBehaviorStatusUsingGET
*/
export default function fetchMethod(options: { params: { templateId?: string } }, extraOptions?: any) {
    return http<IJSONResultDataInteractionOutputDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/getEffectiveBehaviorStatus",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«DataInteractionOutputDTO» */
export interface IJSONResultDataInteractionOutputDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDataInteractionOutputDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** DataInteractionOutputDTO */
export interface IDataInteractionOutputDTO {
    /** 模板编码 */
    templateCode?: string;
    /** 生效状态 */
    interactionStatus?: EDataInteractionOutputDTO_interactionStatus;
}

export enum EDataInteractionOutputDTO_interactionStatus {
    /** 已导入表格 */
    IMPORT_TABLE = "IMPORT_TABLE",
    /** 未导入表格 */
    NOT_IMPORTED_TABLE = "NOT_IMPORTED_TABLE",
    /** 表格导入失败 */
    IMPORT_FAILURE = "IMPORT_FAILURE",
    /** 表格导入中 */
    IMPORTING = "IMPORTING",
    /** 校验中 */
    CHECKING = "CHECKING",
    /** 校验完毕 */
    VERIFIED = "VERIFIED",
    /** 校验失败 */
    VERIFIED_FAIL = "VERIFIED_FAIL",
    /** 数据生效中 */
    DATA_IN_EFFECT = "DATA_IN_EFFECT",
    /** 数据生效完成 */
    DATA_IS_EFFECTIVE = "DATA_IS_EFFECTIVE"
}
