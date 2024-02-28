import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/文件上传相关/uploadUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultAnnexVO>(
        {
            url: "/app-mobile-web/api/app/mobile/fileUpload/upload",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«附件 VO» */
export interface IJSONResultAnnexVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAnnexVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 附件 VO */
export interface IAnnexVO {
    /** 文件id */
    id?: string;
    /** 文件key */
    fileKey?: string;
    /** 文件完整路径 */
    fileUrl?: string;
    /** 文件名 */
    fileName?: string;
    /** 文件大小 */
    size?: string;
}
