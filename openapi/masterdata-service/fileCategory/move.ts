import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/文件分类相关/moveUsingPOST
*/
export default function fetchMethod(data: IFileCategoryMoveRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/fileCategory/move",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** FileCategoryMoveRequestDTO */
export interface IFileCategoryMoveRequestDTO {
    /** 当前文件分类ID */
    id?: number;
    /** 移动目标文件分类ID */
    targetFileCategoryId?: number;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
