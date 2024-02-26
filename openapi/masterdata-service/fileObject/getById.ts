import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/文件对象相关/getByIdUsingGET_4
*/
export default function fetchMethod(params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultFileObjectDetailResponseDTO>(
        {
            url: "/masterdata-service/fileObject/getById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«文件对象明细响应DTO» */
export interface IJSONResultFileObjectDetailResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFileObjectDetailResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 文件对象明细响应DTO */
export interface IFileObjectDetailResponseDTO {
    /** ID */
    id?: number;
    /** 文件名 */
    name?: string;
    /** 文件分类ID */
    fileCategoryId?: number;
    /** 文件大小 */
    fileSize?: number;
    /** 文件来源 */
    fileForm?: string;
    /** 文件Key */
    fileKeys?: Record<string, any>[];
}
