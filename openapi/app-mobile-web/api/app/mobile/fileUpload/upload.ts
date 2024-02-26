import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/文件上传相关/uploadUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultFileVO>(
        {
            url: "/app-mobile-web/api/app/mobile/fileUpload/upload",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«文件VO» */
export interface IJSONResultFileVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFileVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 文件VO */
export interface IFileVO {
    /** 文件key */
    fileKey?: string;
    /** 文件完整路径 */
    fileUrl?: string;
    /** 文件名 */
    fileName?: string;
    /** 文件后缀 */
    fileSuffix?: string;
}
